# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  user_id     :integer          not null
#  genre       :string           not null
#  duration    :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Song < ApplicationRecord
    has_one_attached :photo
end
