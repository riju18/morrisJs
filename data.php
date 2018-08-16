<?php
  define('HOST', 'localhost');
  define('USER', 'root');
  define('PASS', '');
  define('DB', 'morrisjs');

  $connect = mysqli_connect( HOST, USER,PASS, DB);
  if ( !$connect ) {
    echo mysqli_error( $connect );
  }

  $data = [];
  $select = "select * from posts";
  $result = mysqli_query( $connect, $select);
  if ( $result ) {
    if ( mysqli_num_rows($result) > 0 ) {
      while ( $row = mysqli_fetch_assoc($result) ) {
        $data[] = $row;
      }
    }

    $jsonData = json_encode( $data );
    print_r( $jsonData );
  }
 ?>
