class Post < ActiveRecord::Base
  attr_accessible :catgegory_id, :content, :title, :user_id
  belongs_to :user

  def self.search(search)
  if search
    find(:all, :order => "created_at DESC", :conditions => ['content LIKE ? OR title LIKE ?', "%#{search}%","%#{search}%"])
  else
    find(:all)
  end
end
end
