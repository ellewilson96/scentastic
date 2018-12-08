class CreateClues < ActiveRecord::Migration[5.2]
  def change
    create_table :clues do |t|
      t.string :answer
      t.text :question
      t.integer :value
      t.datetime :airdate
      t.integer :category_id
      
      t.timestamps
    end
  end
end
