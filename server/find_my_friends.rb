require 'sinatra'
require 'pry'

@@foo = 'bar'

get '/' do
  "#{@@foo}"
end

post '/' do
  binding.pry
  @@foo = params['name']
end
