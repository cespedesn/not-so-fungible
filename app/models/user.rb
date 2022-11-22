class User < ApplicationRecord
    has_one :user_wallet
    has_many :purchased_nfts, through: :user_wallet
end
