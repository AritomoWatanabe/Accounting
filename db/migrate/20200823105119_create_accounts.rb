class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|

    	t.integer :year, null: false
    	t.integer :month, null: false
    	t.integer :day, null: false
    	t.string :item, null: false
    	t.integer :price, null: false

      t.timestamps
    end
  end
end
