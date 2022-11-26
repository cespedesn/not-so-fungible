# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_22_202522) do
  create_table "collections", force: :cascade do |t|
    t.string "collection_name"
    t.string "collection_description"
    t.string "collection_rating"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_collections_on_user_id"
  end

  create_table "nfts", force: :cascade do |t|
    t.string "nft_name"
    t.string "nft_price"
    t.string "nft_description"
    t.string "nft_image"
    t.integer "collection_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collection_id"], name: "index_nfts_on_collection_id"
  end

  create_table "purchased_nfts", force: :cascade do |t|
    t.string "nft_name"
    t.string "nft_price"
    t.string "nft_description"
    t.string "nft_image"
    t.integer "user_id", null: false
    t.integer "user_wallet_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_purchased_nfts_on_user_id"
    t.index ["user_wallet_id"], name: "index_purchased_nfts_on_user_wallet_id"
  end

  create_table "user_wallets", force: :cascade do |t|
    t.string "user_wallet_available_funds"
    t.integer "wallet_nft_count"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_wallets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.boolean "user_admin"
    t.string "user_fullname"
    t.string "user_name"
    t.string "user_email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "collections", "users"
  add_foreign_key "nfts", "collections"
  add_foreign_key "purchased_nfts", "user_wallets"
  add_foreign_key "purchased_nfts", "users"
  add_foreign_key "user_wallets", "users"
end
