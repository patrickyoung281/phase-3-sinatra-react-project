class DeleteDialectSpeakerColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :dialects, :number_of_speakers 
  end
end
