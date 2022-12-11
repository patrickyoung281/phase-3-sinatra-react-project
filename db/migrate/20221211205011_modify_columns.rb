class ModifyColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :languages, :language_family
    remove_column :languages, :endangered? 
    remove_column :dialects, :endangered?
  end
end
