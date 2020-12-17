# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  description     :text
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  display_name    :string
#
class User < ApplicationRecord
    attr_reader :password

    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment,
        dependent: :destroy

    has_many :songs,
        foreign_key: :user_id,
        class_name: :Song,
        dependent: :destroy

    has_one_attached :profile_picture
    has_one_attached :profile_banner 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user.nil?
            return nil
        else
            user.is_password?(password) ? user : nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    private
  
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
