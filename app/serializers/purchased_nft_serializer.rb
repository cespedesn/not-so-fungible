class PurchasedNftSerializer < ActiveModel::Serializer
  attributes :id, :nft_name, :nft_description, :nft_image
  has_one :user
  has_one :user_wallet
end
