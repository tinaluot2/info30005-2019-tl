/* * * * * * *
 * Implementation of the Inside Hull algorithm for Assignment 1
 *
 * created for COMP20007 Design of Algorithms 2019
 * template by Tobias Edwards <tobias.edwards@unimelb.edu.au>
 * implementation by <Insert Name Here>
 */

//                   WRITE YOUR IMPLEMENTATION HERE
//
// You should fill in the function definitions for orientation() and
// inside_hull() in this file.
//
// Don't be shy to add any extra functions or types you may need.

#include <stdio.h>
#include <stdlib.h>
#include "convex-hull.h"
#include "deque.h"

// Returns the orientation of Point p2 in relation to the line segment p0p1.
// If p2 is to the left of p0p1 then it returns LEFT ('l'), if p2 is to the
// right it returns RIGHT ('r').
// If p0, p1 and p2 are collinear then COLLINEAR ('c') is returned.
char orientation(Point p0, Point p1, Point p2) {
  //R = (p1.x-p0.x)*(p2.y-p0.y) - (p1.y-p0.y)*(p2.x-p0.x)
  //printf("orientation(p0:%f,%f   P1:%f,%f     P2:%f,%f  ",p0.x,p0.y,p1.x,p1.y,p2.x,p2.y);
  double R;
  R = (p1.x-p0.x)*(p2.y-p0.y) - (p1.y-p0.y)*(p2.x-p0.x);
  if(R>0) 
  {
    //printf("return value: %c \n" , LEFT);
    return LEFT;
  }
  if(R <0)
  {
      //printf("return value: %c \n" , RIGHT);
      return RIGHT;
  }
  //printf("return value: %c \n" , COLLINEAR);
  return COLLINEAR;
}

// Takes a polygon (i.e. an array of points) given in counter-clockwise order
// with n points.
//
// Stores the points of the convex hull into the hull array (the last point
// should NOT be the same as the first point), and returns the number of
// points which are in the convex hull.
//
// If three successive points in the polygon are collinear then the algorithm
// should terminate and COLLINEAR_POINTS should be returned.
//
// If an error occurs this function should return INSIDE_HULL_ERROR.
int inside_hull(Point *polygon, int n, Point *hull) {
  
  //printf("Enter inside_hull\n");
  int validation,i;
  Point p0,p1,p2;
  Point pt_1,pt_2,pb_1,pb_2;
  Deque *C;
  int dequecount;
  Point p;
  
  validation = hascollinear(polygon);
  if (validation == COLLINEAR_POINTS)
    return validation;
    
  p0 = polygon[0];
  p1 = polygon[1];
  p2 = polygon[2];
  if (orientation(p0, p1, p2) == LEFT)
  {
    C = new_deque();
    deque_push(C, p2);
    deque_push(C, p0);
    deque_push(C, p1);
    deque_push(C, p2);

  }
  else
  {
    C = new_deque();
    deque_push(C, p2);
    deque_push(C, p1);
    deque_push(C, p0);
    deque_push(C, p2);
  }
    //remeber top 2 and bottom 2 points
    pt_1 = p2;
    pt_2 = p1;
    pb_1 = p2;
    pb_2 = p1;
  //set i = 3
  i = 3;
  while (i < n)
  {
    Point pi = polygon[i];
    //if Left(ct−1, ct, pi) and Left(cb, cb+1, pi) then
    if (orientation(pt_2, pt_1, pi) == LEFT && orientation(pb_1, pb_2, pi) == LEFT)
    {
      //printf("continue\n");
      i = i + 1;
      continue;
    }
    //while Right(ct−1, ct, pi) do
    while (orientation(pt_2, pt_1, pi) == RIGHT)
    { 
      //printf("while Right(ct−1, ct, pi)\n");
      //Pop ct from C
      deque_pop(C);
      //refresh 2 top Points
      pt_2 = deque_secondtop();
      pt_1 = deque_top();
      
      if (deque_size(C) < 3)
        break;
    }
    //Push pi to C
    deque_push(C,pi);
    //refresh 2 top Points
    pt_2 = deque_secondtop();
    pt_1 = deque_top();
    
    //while Right(cb, cb+1, pi) do
    while (orientation(pb_1, pb_2, pi) == RIGHT)
    {  
      //printf("while Right(cb, cb+1, pi)\n");  
      //Remove cb from C
      deque_remove(C);
      //refresh 2 bottom Points
      pb_2 = deque_secondbottom();
      pb_1 = deque_bottom();
      
      if (deque_size(C) < 3)
        break;
    }
    //Insert pi into C
    deque_insert(C, pi);
    //refresh 2 bottom Points
    pb_2 = deque_secondbottom();
    pb_1 = deque_bottom();
    //i ← i + 1
    i = i + 1;
  }
  //save all hull points into hull
  //reset i to 0;
  i = 0;
  dequecount = deque_size(C);
  while (i < dequecount)
  {
    p = deque_remove(C);
    hull[i] = p;
    i = i + 1;
  }
  //printf("Exit inside_hull\n");
  //free memory
  free_deque(C);
  C = NULL;
  //printf("isCONVEX in hull %d \n", isCONVEX(hull));
  //get the count of hull and return it
  return i - 1;
}
// return 0 if the polygon in counterclockwise order
int isCONVEX(Point *polygon){
  printf("Enter isCONVEX\n");
  char orient;
  int n,i;
  i =0;
  n = sizeof(polygon);
  for(i;i<n;i = i +1)
  {
    
    orient = orientation(polygon[i], polygon[(i+1) % n], polygon[(i+2) % n]);
    if (orient == RIGHT)
      return INSIDE_HULL_ERROR;
    else if (orient == COLLINEAR)
      return COLLINEAR_POINTS;
  }
  return 0;
  printf("Exit isCONVEX\n");
}

//return -2 if the polygon has collinear points
int hascollinear(Point *polygon){
  printf("Enter hascollinear\n");
  char orient;
  int n,i;
  i =0;
  n = sizeof(polygon);
  for(i;i<n;i = i +1)
  {
    
    orient = orientation(polygon[i], polygon[(i+1) % n], polygon[(i+2) % n]);
    if (orient == COLLINEAR)
      return COLLINEAR_POINTS;
  }
  return 0;
  printf("Exit hascollinear\n");
}
