class UserWalletSerializer < ActiveModel::Serializer
  attributes :id, :user_wallet_available_funds, :wallet_nft_count
  belongs_to :user
  has_many :purchased_nfts
end