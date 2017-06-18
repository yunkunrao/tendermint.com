.PHONY: godoc

godoc:
	@go get github.com/davecheney/godoc2md
	godoc2md github.com/tendermint/tendermint/types > content/docs/specs/tendermint-types.md
