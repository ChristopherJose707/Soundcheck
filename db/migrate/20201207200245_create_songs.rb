class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.text :description
      t.integer :user_id, null: false
      t.string :genre, null: false
      t.float :duration, null: false
      t.string :song_photo

      t.timestamps
    end
    add_index :songs, :title 
    add_index :songs, :user_id
    add_index :songs, :genre
  end
end
