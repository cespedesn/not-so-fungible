class User < ApplicationRecord
    has_one :user_wallet
    has_many :purchased_nfts, through: :user_wallet

    has_secure_password

    validates :user_name, presence: true, uniqueness: true
    validates :user_fullname, presence: true, uniqueness: true
end
