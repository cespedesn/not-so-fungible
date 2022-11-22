class CreateUserWallets < ActiveRecord::Migration[7.0]
  def change
    create_table :user_wallets do |t|
      t.string :user_wallet_available_funds
      t.integer :wallet_nft_count
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
