class UserWalletSerializer < ActiveModel::Serializer
  attributes :id, :user_wallet_available_funds, :wallet_nft_count
  has_one :user
end
