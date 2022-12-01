class CreatePurchasedNfts < ActiveRecord::Migration[7.0]
  def change
    create_table :purchased_nfts do |t|
      t.string :nft_name
      t.string :nft_price
      t.string :nft_description
      t.string :nft_image
      t.string :reviews
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :user_wallet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
