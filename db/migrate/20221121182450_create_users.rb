class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.boolean :user_admin
      t.string :user_fullname
      t.string :user_name
      t.string :user_email
      t.string :password_digest
      t.boolean :redeemed_nft

      t.timestamps
    end
  end
end
