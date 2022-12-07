class UserWalletSerializer < ActiveModel::Serializer
  attributes :id, :redeemed_nft
  belongs_to :user
  has_many :purchased_nfts
end
