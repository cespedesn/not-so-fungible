class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_fullname, :user_name, :email, :password_digest
  has_one :user_wallet
end
