class Widget < ApplicationRecord
  validates :location, uniqueness: { scope: [:widgetable] }
  validates :location, presence: true
  belongs_to :widgetable, polymorphic: true
end
