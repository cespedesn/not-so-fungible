class UserWallet < ApplicationRecord
  belongs_to :user
  has_many :purchased_nfts
end
