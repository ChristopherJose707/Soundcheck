# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  song_id    :integer          not null
#  body       :string           not null
#  parent_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
