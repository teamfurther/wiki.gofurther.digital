# wiki.gofurther.digital

This repo contains the source code our [our company wiki pages](https://wiki.gofurther.digital).

## Installation and build

### x64 chipset
- Install Ruby
- Install bundler ```gem install bundler```
- ```bundle install```
- ```arch -arch x86_64 jekyll build```

### M1 chipset
M1 chipset throws an error when building Jekyll, so we need to revert to x64.

- Install Ruby
- Install bundler ```gem install bundler```
- ```arch -arch x86_64 bundle install```
- ```arch -arch x86_64 jekyll build```

## License

The project, Jekyll and the Minima theme are available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
