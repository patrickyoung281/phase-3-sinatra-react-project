class CreateDialects < ActiveRecord::Migration[6.1]
  def change
    create_table :dialects do |t|
      t.string :dialect_name
      t.integer :number_of_speakers
      t.boolean :endangered?
      t.integer :language_id
    end
  end
end
