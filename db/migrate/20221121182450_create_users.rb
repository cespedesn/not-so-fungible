class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.boolean :user_admin
      t.string :user_fullname
      t.string :user_name
      t.string :user_email
      t.string :user_password

      t.timestamps
    end
  end
end
