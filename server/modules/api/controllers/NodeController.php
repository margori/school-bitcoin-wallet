<?php

namespace app\modules\api\controllers;

use app\common\Constants;
use app\models\Wif;
use Denpa\Bitcoin\Client as BitcoinClient;
use Yii;

class NodeController extends \yii\web\Controller
{
  public $enableCsrfValidation = false;

  public function actionGetUtxos()
  {
    $addresses = Yii::$app->request->post("addresses");

    $bitcoind = new BitcoinClient('http://test:test@node:18332/');

    $balance = 0;
    $utxos = [];
    foreach ($addresses as $address) {
      $rawResult = $bitcoind->scantxoutset("start",  ['addr(' . $address . ')']);
      $result = $rawResult->toArray();
      $balance +=  $result['total_amount'] * 100000000;

      foreach ($result['unspents'] as $unspent) {
        $unspent['address'] = $address;
        $utxos[] = $unspent;
      }
    }

    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
    Yii::$app->response->statusCode = 200;
    return [
      Constants::RESULT => Constants::OK,
      Constants::DATA => [
        'balance' => $balance,
        'utxos' => $utxos
      ]
    ];
  }

  public function actionFund()
  {
    $address = Yii::$app->request->post("address");

    $bitcoind = new BitcoinClient('http://test:test@node:18332/');

    $result =  $bitcoind->sendtoaddress($address, 0.1, "fund", "fund", false, true, 6, 'economical');
    Yii::debug($result);

    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
    Yii::$app->response->statusCode = 200;
    return [
      Constants::RESULT => Constants::OK,
    ];
  }
}
