class Post < ActiveRecord::Base
  attr_accessible :catgegory_id, :content, :title, :user_id
  belongs_to :user
end
