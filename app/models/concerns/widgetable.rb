module Widgetable
  extend ActiveSupport::Concern

  included do
    has_many :widgets, as: :widgetable
  end

  def receive_widget(location)
    self.widget.find_or_create_by(location: location)
  end
end
