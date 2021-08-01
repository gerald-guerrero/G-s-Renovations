<?php
require('fpdf183/fpdf.php');

$pdf = new FPDF('P','mm','A4');
$pdf->AddPage();
//$pdf = SetMargin(1,1,1);
$pdf->SetFont('Arial','B',16); // this is mandatory to print text
$pdf->Cell(40,10,'Hello World!');
$pdf->Output();

?>