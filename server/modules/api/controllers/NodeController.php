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

    $utxos = $bitcoind->listunspent(6, 999999999, $addresses);
    Yii::debug($utxos->toArray());

    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
    Yii::$app->response->statusCode = 200;
    return [
      Constants::RESULT => Constants::OK,
      Constants::DATA => $utxos->toArray()
    ];
  }
}
