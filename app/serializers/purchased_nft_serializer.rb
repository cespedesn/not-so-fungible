class PurchasedNftSerializer < ActiveModel::Serializer
  attributes :id, :nft_name, :nft_description, :nft_image
  # belongs_to :user
  belongs_to :user_wallet
end
