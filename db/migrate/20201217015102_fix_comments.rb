class FixComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :author_id 
    add_column :comments, :author_id, :integer, null: false
    add_index :comments, :author_id
  end
end
