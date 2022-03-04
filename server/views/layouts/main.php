<?php

/** @var yii\web\View $this */
/** @var string $content */

use app\assets\AppAsset;
use app\widgets\Alert;
use yii\bootstrap4\Breadcrumbs;
use yii\bootstrap4\Html;
use yii\bootstrap4\Nav;
use yii\bootstrap4\NavBar;

AppAsset::register($this);

$bundlePath = Yii::getAlias('@webroot/bundle.js');
$bundleMD5 = md5_file($bundlePath);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" class="h-100">

<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <script>
        window.defaults = {
            backendUrl: "<?= Yii::$app->request->baseUrl ?>/"
            apiUrl: "<?= Yii::$app->request->baseUrl ?>/api/"
        };
    </script>
    <script src="<?= Yii::$app->request->baseUrl ?>/bundle.js?m=<?= $bundleMD5 ?>"></script>
    <?php $this->head() ?>
</head>

<body class="d-flex flex-column h-100">
    <?php $this->beginBody() ?>
    <?= $content ?>
    <?php $this->endBody() ?>
</body>

</html>
<?php $this->endPage() ?>