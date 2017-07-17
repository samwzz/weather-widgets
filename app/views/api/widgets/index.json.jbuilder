@widgets.each do |widget|
  json.set! widget.id do
    json.partial! 'widget', widget: widget
  end
end
