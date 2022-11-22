class PurchasedNft < ApplicationRecord
  belongs_to :user
  belongs_to :user_wallet
end
