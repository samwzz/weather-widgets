class WidgetsController < ApplicationController
  def index
    if params.key?(:user_id)
      @widgets = User.find_by(id: params[:user_id]).widgets
    else
      @widgets = Widget.all
    end

    render :index
  end

  def show
  end

  def create
    @widget = Widget.new(widget_params)

    if @widget.save!
      render :show
    else
      render json: @widget.errors.full_messages, status: 422
    end
  end

  def update
    @widget = Widget.find_by(id: params[:id])

    if @widget.update(widget_params)
      render :show
    else
      render json: @widget.errors.full_messages, status: 422
    end
  end

  def destroy
    @widget = Widget.find_by(id: params[:id])

    if @widget.destroy
      render :show
    else
      render json: @widget.errors.full_messages, status: 422
    end
  end

  private

  def widget_params
    params.require(:widget).permit(:location, :widgetable_id, :widgetable_type)
  end
end
