About Lifecycle in Parent and Child component


Mounting<-><-><-><-><-><-><-><-><-><-><->
1. Constructor Called
2. getDerivedStateFromProps Called
3. render Called
4. Parent Component Called
5. Child Component Called
6. compoundDidMount Called


Updating<-><-><-><-><-><-><-><-><-><-><->
1. Constructor Called
2. getDerivedStateFromProps Called
3. shouldComponentUpdate Called
4. render Called
5. Parent Component Called
6. Child Component Called
7. getSnapshotBeforeUpdate Called
8. counterDidUpdate Called
9. compoundDidMount Called


Unmounting<-><-><-><-><-><-><-><-><-><-><->
1. componentWillUnmount() - method is invoked immediately before component is unmount and desteroyed
