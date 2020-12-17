class RemoveUnique < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :song_id
    add_column :comments, :song_id, :integer, null: false
  end
end
