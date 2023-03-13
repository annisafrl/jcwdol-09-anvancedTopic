import React from "react";
import { useSelector } from "react-redux";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';

function DataUser() {
    const userList = useSelector((state) => state.user.userList)

    const renderUserList = () => {
        return userList.map((user) => {
            return (
                <div className="my-10">
                    <TableContainer>
                        <Table variant='striped' colorScheme='pink'>
                            <Thead>
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>username</Th>
                                    <Th>Email</Th>
                                    <Th>Password</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{user.id}</Td>
                                    <Td>{user.username}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{user.password}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
            )

        })

    }

    return (
        <div>{renderUserList()}</div>

    )
}

export default DataUser