class CreateCollections < ActiveRecord::Migration[7.0]
  def change
    create_table :collections do |t|
      t.string :collection_name
      t.string :collection_description
      t.string :collection_rating
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
