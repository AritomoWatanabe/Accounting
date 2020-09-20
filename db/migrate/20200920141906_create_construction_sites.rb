class CreateConstructionSites < ActiveRecord::Migration[5.2]
  def change
    create_table :construction_sites do |t|

    	t.string :name, null: false

      t.timestamps
    end
  end
end
