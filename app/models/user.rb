class User < ActiveRecord::Base
  has_secure_password
  attr_accessible :fname, :lname, :password, :password_confirmation
end
