class Fix < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :display_name
    add_column :users, :display_name, :string
    add_index :users, :display_name
  end
end
