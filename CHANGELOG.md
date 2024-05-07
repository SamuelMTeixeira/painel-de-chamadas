# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v1.3.0] - 2024-05-07

### Added

- Add support for NovoSGA 2.1

### Changed

- refactor: remove websocket client and add mercure

## [v1.2.3] - 2024-04-30

### Fixed

- fix: cache when logged on app

## [v1.2.2] - 2024-04-30

### Added

- build: add axios-auth-refresh to refresh token automatically and integrate with axios

### Changed

- refactor: unnecessary data when there are no appointment
- refactor: separation of websocket url and api url

### Fixed

- fix: websocket not working with htpps and refresh token interceptor

## [v1.2.1] - 2024-04-02

### Changed

- refactor: show sector info in panel

### Fixed

- fix: font imports on top of file

## [v1.2.0] - 2024-04-01

### Added

- feat: add support for multiple services
- feat: implement custom fonts

## [v1.1.0-alpha] - 2024-03-20

### Added

- feat: implement refresh token function
- feat: add command menu

### Fixed

- fix: token expired

## [v1.0.0-alpha] - 2024-02-03

### Added

- feat: mvp version of the app