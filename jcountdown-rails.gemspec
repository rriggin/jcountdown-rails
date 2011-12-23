Gem::Specification.new do |s|
  s.name = 'jcountdown-rails'
  s.authors = 'Sergey Rezvanov'
  s.email = 'rezwyi@gmail.com'
  s.homepage = 'http://github.com/rezwyi/jcountdown-rails'

  s.version = '0.1.0'
  s.summary = 'A simple jQuery countdown for Rails 3.1'
  s.files = `git ls-files`.split("\n")

  s.add_dependency 'railties', '>= 3.1.0'
  s.add_dependency 'bundler', '~> 1.0.0'
  s.add_dependency 'rails', '~> 3.1'
  s.add_dependency 'jquery-rails'
end
