# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  user_id     :integer          not null
#  genre       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Song < ApplicationRecord
    validates :user_id, :title, :genre, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
    
    has_many :comments,
        foreign_key: :song_id,
        class_name: :Comment,
        dependent: :destroy

    has_many :likes,
        foreign_key: :song_id,
        class_name: :Like

    has_one_attached :photo
    has_one_attached :song
end
