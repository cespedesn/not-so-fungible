class UserWalletSerializer < ActiveModel::Serializer
  attributes :id, :user_wallet_available_funds, :wallet_nft_count
  has_many :purchased_nfts
end
