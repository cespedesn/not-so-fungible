class CreateNfts < ActiveRecord::Migration[7.0]
  def change
    create_table :nfts do |t|
      t.string :nft_name
      t.string :nft_price
      t.string :nft_description
      t.string :nft_image
      t.belongs_to :collection, null: false, foreign_key: true
     

      t.timestamps
    end
  end
end
