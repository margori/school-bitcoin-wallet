/bitcoin-${VERSION}/bin/bitcoind -regtest &
sleep 2
/bitcoin-${VERSION}/bin/bitcoin-cli -regtest createwallet default

/bitcoin-${VERSION}/bin/bitcoin-cli -regtest -generate 100
while :
do
    sleep $BLOCK_INTERVAL_IN_SECONDS
    /bitcoin-${VERSION}/bin/bitcoin-cli -regtest -generate 1
done
