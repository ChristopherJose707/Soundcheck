class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :song_photo
  end
end
