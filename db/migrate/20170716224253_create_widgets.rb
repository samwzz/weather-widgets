class CreateWidgets < ActiveRecord::Migration[5.0]
  def change
    create_table :widgets do |t|
      t.string :location, null: false
      t.references :widgetable, polymorphic: true, index: true

      t.timestamps
    end

    add_index :widgets, [:location, :widgetable_id, :widgetable_type], unique: true
  end
end
